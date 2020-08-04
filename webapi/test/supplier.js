const fetch = require(`node-fetch`);

(async () => {

  let inst
  {
    let base = `http://127.0.0.1:3000/api/supplier`
    let data = {
      name: `supplier` + new Date().getTime(),
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
    let base = `http://127.0.0.1:3000/api/supplier/${inst.id}`
    let res = await fetch(`${base}`);
    let data = await res.json()
    console.log(data);
  }

  {
    let base = `http://127.0.0.1:3000/api/supplier/${inst.id}`
    let data = {
      name: `修改supplier` + new Date().getTime(),
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
    let base = `http://127.0.0.1:3000/api/supplier/${inst.id}`
    let res = await fetch(`${base}`);
    let data = await res.json()
    console.log(data);
  }

  {
    let base = `http://127.0.0.1:3000/api/supplier/${inst.id}`

    let res = await fetch(`${base}`, {
      method: 'DELETE',
    });
    let result = await res.json()
    console.log(result);
  }

  {
    let base = `http://127.0.0.1:3000/api/supplier/${inst.id}`
    let res = await fetch(`${base}`);
    let data = await res.json()
    console.log(data);
  }


})()
