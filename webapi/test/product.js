const fetch = require("node-fetch");

(async () => {

  {
    let base = "http://127.0.0.1:3000/api/product"
    let data = {
      name: "产品" + new Date().getTime(),
      category_id: 1,
    }
    let res = await fetch(`${base}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
    let s = await res.json()
    console.log(s);
  }

  {
    let base = "http://127.0.0.1:3000/api/product"
    let res = await fetch(`${base}`);
    let data = await res.json()
    console.log(data);
  }



})()
