/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // 1. create a graph
  // index: course id
  // value: pre requisites that each course id has
  const graph = Array.from({ length: numCourses }, () => []);

  prerequisites.forEach((each) => {
    const [a, b] = each;
    graph[a].push(b);
  });

  // initialize seen and seeing set
  const seen = new Set();
  const seeing = new Set();

  const explore = (course) => {
    if (seen.has(course)) return true;
    if (seeing.has(course)) return false;

    seeing.add(course);

    if (graph[course] !== undefined) {
        graph[course].forEach((pre) => {
        if (!explore(pre)) return false;
      });
    }

    seen.add(course);
    seeing.delete(course);
    return true
};

  for (let i = 0; i < numCourses; i++) {
    if (!explore(i)) return false;
  }
  return true
};

console.log(canFinish(2, [
  [
    1, 0],
]))
