import properMockData from './properMockData'

export const nodes = properMockData.nodes.filter(node => {
        return node.lowest.toLowerCase() === "yes"
      });
  export const links = properMockData.links.filter(link => {
      return link.lowest.toLowerCase() === "yes"
  });
  
  export default {
    nodes,
    links,
  };
  