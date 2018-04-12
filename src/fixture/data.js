const randomDate = (start, end) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

let data = [];
let id = 1;

// oh noes a for loop 🙀
for (let i = 0; i < 300; i++) {
  data.push({
    id: id++,
    date: randomDate(new Date(2012, 0, 1), new Date())
  });
}

export default data;