const fetch = require(`node-fetch`);

(async () => {

  let inst
  {
    let base = `http://127.0.0.1:3000/api/product`
    let data = {
      name: `product` + new Date().getTime(),
      category_id: 15,
      price: "1",
      suppliers: "",
      purchase_channels: "",
    }
    let res = await fetch(`${base}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    inst = await res.json()
    console.log(inst);
  }

  {
    let base = `http://127.0.0.1:3000/api/product/${inst.id}`
    let res = await fetch(`${base}`);
    let data = await res.json()
    console.log(data);
  }

  {
    let base = `http://127.0.0.1:3000/api/product/?category_id=${inst.category_id}`
    let res = await fetch(`${base}`);
    let data = await res.json()
    console.log(data);
    console.log(data.rows[0].Category);
  }

  {
    let base = `http://127.0.0.1:3000/api/product/${inst.id}`
    let data = {
      name: `修改product` + new Date().getTime(),
      display_order: 11,
      price: "123",
      show: false,
      suppliers: "222",
      purchase_channels: "333",
    }
    let res = await fetch(`${base}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    let result = await res.json()
    console.log(result);
  }

  {
    let base = `http://127.0.0.1:3000/api/product/${inst.id}`
    let res = await fetch(`${base}`);
    let data = await res.json()
    console.log(data);
  }

  {
    let base = `http://127.0.0.1:3000/api/product/${inst.id}`

    let res = await fetch(`${base}`, {
      method: 'DELETE',
    });
    let result = await res.json()
    console.log(result);
  }

  {
    let base = `http://127.0.0.1:3000/api/product/${inst.id}`
    let res = await fetch(`${base}`);
    let data = await res.json()
    console.log(data);
  }


})()
