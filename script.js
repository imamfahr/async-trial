const getDataUser = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(typeof(data))
    console.log("getdatauser", data);
    return data;
  };
  getDataUser();
  