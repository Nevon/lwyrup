var async = require("async");

const createWalker = start => {
  const walker = {
    queue: [start],
    visited: [],
    merge: otherWalker =>
      (walker.queue = [...new Set([...walker.queue, ...otherWalker.queue])])
  };

  return walker;
};

module.exports = (nodes, getParents, done) => {
  if (nodes.length <= 1) {
    return done(null, nodes[0]);
  }

  let walkerStack = nodes.map(node => createWalker(node));

  async.whilst(
    () => walkerStack.some(walker => walker.queue.length),
    next => {
      const walker = walkerStack.shift();

      if (walker.queue.length === 0) {
        walkerStack = [...walkerStack, walker];
        return next();
      }

      const node = walker.queue.shift();
      const walkerWithCommonAncestor = walkerStack.find(otherWalker =>
        otherWalker.visited.includes(node)
      );

      if (walkerWithCommonAncestor) {
        if (walkerStack.length === 1) {
          return done(null, node);
        } else {
          walkerWithCommonAncestor.merge(walker);
          next();
        }
      } else {
        walker.visited = [...walker.visited, node];

        getParents(node, (err, parents) => {
          if (err) {
            parents = [];
          }

          walker.queue = [...walker.queue, ...parents];
          walkerStack = [...walkerStack, walker];
          next();
        });
      }
    },
    done
  );
};
