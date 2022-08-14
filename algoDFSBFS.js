const graph = {
    a: ["b", "c"],
    b: ["d"],
    c: ["e"],
    d: [],
    e: ["b"],
    f: ["d"]
}

const depthFirstSearch = (graph, source) => {
    const stack = [ source ];

    while (stack.length > 0) {
        const current = stack.pop()
        console.log(current)
        for (let neighbour of graph[current]) {
            stack.push(neighbour)
        }
    }

}

const breathFirstSearch = (graph, source) => {
    const queue = [source]

    while (queue.length > 0) {
        const current = queue.pop()
        console.log(current)
        for (let neighbour of graph[current]) {
            queue.unshift(neighbour)
        }
    }
}

//depthFirstSearch(graph, "a");
breathFirstSearch(graph, "a")