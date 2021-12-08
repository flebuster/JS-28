function DogBtn() {
    document.querySelector('.content').innerHTML = "";
    fetch('https://api.thedogapi.com/v1/images/search')
        .then((response) => {
            // console.log(response.json());
            response.json().then(
                (data) => {
                    let image = document.createElement('img');
                    let nameDog = document.createElement('p');
                    let weight = document.createElement('p');
                    let age = document.createElement('p');

                    image.src = data[0].url;
                    image.alt = 'dog';
                    nameDog.innerHTML = `name: ` + data[0].breeds[0].name;
                    weight.innerHTML = `weight: ` + data[0].breeds[0].weight.metric;
                    age.innerHTML = `age: ` + data[0].breeds[0].life_span;
                    image.setAttribute('class', 'custom-img');
                    document.querySelector('.content').append(image, nameDog, weight, age);
                    // console.log('height :', data[0].height, 'url: ', data[0].url);
                    console.log(data[0].url);
                    console.log(data[0].breeds[0].name);
                    console.log(data[0].breeds[0].weight.metric);
                    console.log(data[0].breeds[0].life_span);
                }
            ).catch((err) => {
                console.log(err);
            })
            .catch((err) => {
                console.log(err);
            })
    })
}

function CatBtn() {
    document.querySelector('.content').innerHTML = "";
    fetch('https://api.thecatapi.com/v1/images/search')
        .then((response) => {
            // console.log(response.json());
            response.json().then(
                (data) => {
                    let image = document.createElement('img');
                    let nameCat = document.createElement('p');
                    let weight = document.createElement('p');
                    let age = document.createElement('p');

                    image.src = data[0].url;
                    image.alt = 'cat';
                    nameCat.innerHTML = `name: ` + data[0].breeds[0].name;
                    weight.innerHTML = `weight: ` + data[0].breeds[0].weight.metric;
                    age.innerHTML = `age: ` + data[0].breeds[0].life_span;
                    image.setAttribute('class', 'custom-img');
                    document.querySelector('.content').append(image, nameCat, weight, age);
                    // console.log('height :', data[0].height, 'url: ', data[0].url);
                    console.log(data[0].url);
                    console.log(data[0].breeds[0].name);
                    console.log(data[0].breeds[0].weight.metric);
                    console.log(data[0].breeds[0].life_span);

                }
            ).catch((err) => {
                console.log(err);
            })
            .catch((err) => {
                console.log(err);
            })
    })
}