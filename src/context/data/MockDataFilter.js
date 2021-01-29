import nodeData from './nodeData.json'

export const nodes = nodeData.nodes.filter(node => {
        return node.lowest.toLowerCase() === "yes"
      });
  export const links = nodeData.links.filter(link => {
      return link.lowest.toLowerCase() === "yes"
  });
  
  export default {
    nodes,
    links,
  };
  