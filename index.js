function intersection(set1, set2) {
  return new Set([...set1].filter(x => set2.has(x)));
}

function union(set1, set2) {
  const ret = new Set(set1);
  for (const elem of set2) {
    ret.add(elem);
  }
  return ret;
}

export function jaccardCurvature(adjacencyList, i, j) {
  const Ni = new Set(adjacencyList[i]);
  const Nj = new Set(adjacencyList[j]);
  const C = intersection(Ni, Nj).size;
  const N = union(Ni, Nj).size;
  const J = C / N;
  return -2 + 3 * J;
}
