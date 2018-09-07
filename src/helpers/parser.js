import { find, isNil } from 'lodash';

const enableLogging = process.env.NODE_ENV === 'development';

class JSONAPI {
  parseRelationship(relItem, included) {
    const { id: relId, type: relType } = relItem;
    const collection = included.filter(({ type }) => type === relType)
    const rel = find(collection, (el) => el.id ===  relId);
    return rel ? this.parseObject(rel, included) : null;
  }

  parseObject(data, included) {
    if (typeof data.attributes === 'undefined') { 
      return data;
    }

    const { id, attributes: obj, relationships } = data;

    if (id !== undefined) obj.id = id;

    if (relationships && included) {
      Object.keys(relationships).forEach(attr => {
        const relationship = relationships[attr].data;

        if (isNil(relationship)) {
          if (enableLogging) console.warn(`JSONAPI.parse: relationship is ${relationship}`); // eslint-disable-line
        } else if (Array.isArray(relationship)) {
          relationship.forEach(relItem => {
            const rel = this.parseRelationship(relItem, included);
            if (rel) {
              if (obj[attr] === undefined) obj[attr] = [];
              obj[attr].push(rel);
            } else if (enableLogging) {
              console.warn(`JSONAPI.parse: relationship "${relItem.type}" is provided without included`); // eslint-disable-line
            }
          });
        } else {
          const rel = this.parseRelationship(relationship, included);
          if (rel) {
            obj[attr] = rel;
          } else if (enableLogging) {
            console.warn(`JSONAPI.parse: relationship "${relationship.type}" is provided without included`); // eslint-disable-line
          }
        }
      });
    }

    return obj;
  }

  parse(response) {
    if (!response) throw new Error('JSONAPI.parse fails with empty response param');

    const { data, included, errors, meta } = response;

    if (data === undefined && errors === undefined) {
      console.warn('JSONAPI.parse: neither data nor errors provided'); // eslint-disable-line
    }

    if (typeof data !== 'undefined' && !(data instanceof Array)) { // is object
      return {
        data: this.parseObject(data, included),
        errors: errors || null,
        meta: meta || null,
      };
    }
    return {
      data: data ? data.map(obj => this.parseObject(obj, included)) : null,
      errors: errors || null,
      meta: meta || null,
    };
  }
}

const parser = new JSONAPI(); 
export default parser;
