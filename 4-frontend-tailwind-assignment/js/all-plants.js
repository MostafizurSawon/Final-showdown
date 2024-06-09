const loadHome = () => {
  // document.getElementById("recipies2").innerHTML = "";
  // document.getElementById("spinner3").style.display = "block";
  // let length = document.getElementById("longon-length");
  // length.innerHTML = "";
  // console.log(search);
  fetch(
    `https://gardenhub-django.onrender.com/plants/plant-list/`
  )
    .then((res) => res.json())
    .then((data) => {
      // console.log("1->",data);
      if (data.results.length > 0) {
        // document.getElementById("spinner3").style.display = "none";
        // document.getElementById("nodata3").style.display = "none";
        displayHome(data?.results);
        // console.log(data.results.length);
      } else {
        // console.log(data);
        
        // document.getElementById("recipies2").innerHTML = "";
        // document.getElementById("spinner3").style.display = "none";
        // document.getElementById("nodata3").style.display = "block";
      }
      
    });
};

const displayHome = (plants) => {
  console.log("->",plants);
  plants?.forEach((plant) => {
    
    // const categoryNames = recipie.category.join(', ');
    let idd = '';
    console.log('----->',plant.category);
    if(plant.category == 3){
      idd = 'longon';
      console.log('longi');
    }
    else if(plant.category == 2){
      idd = 'malberry';
      console.log('longi',idd);
    }
    else if(plant.category == 3)
    {
      idd = 'longon';
    }
    else
    {
      idd = 'grape';
    }
    const parent = document.getElementById(idd);
    const inside = document.createElement("div");

    const isoDateString = plant.created;
    const date = new Date(isoDateString);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    };

    // Convert to a human-readable format
    const formattedDate = date.toLocaleString('en-US', options);

    inside.classList.add(
      "flex",
      "flex-col",
      "rounded-xl",
      "bg-white",
      "bg-clip-border",
      "text-gray-700",
      "shadow-lg"
    );
    inside.innerHTML = `
          <div class="mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img class="cus hover:scale-110"
              src=${plant.image}
              alt="ui/ux review check"
            />
             
          </div>
          <div class="p-6">
            <div class="mb-3 flex items-center justify-between">
              <h5 class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                ${plant.title}
              </h5>
              <p class="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="-mt-0.5 h-5 w-5 text-yellow-700"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                5.0
              </p>
            </div>
            <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
              ${plant.description}
            </p>
            
            <p class="mt-4 block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">Price: $${plant.price}</p>
            <p class="mt-4 block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">Available plant: ${plant.quantity}</p>
            <p class="mt-4 block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">Owner: <span class="text-green-600">${plant.user}</span></p>
            <p class="mt-4 block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">Created On: ${formattedDate}</p>
            <div class="group mt-8 inline-flex flex-wrap items-center gap-3">
              <span
                data-tooltip-target="money"
                class="cursor-pointer rounded-full border border-green-500/5 bg-green-500/5 p-3 text-green-500 transition-colors hover:border-green-500/10 hover:bg-green-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="h-5 w-5"
                >
                  <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                    clip-rule="evenodd"
                  ></path>
                  <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"></path>
                </svg>
              </span>
              <span
                data-tooltip-target="wifi"
                class="cursor-pointer rounded-full border border-green-500/5 bg-green-500/5 p-3 text-green-500 transition-colors hover:border-green-500/10 hover:bg-green-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
          
              <span
                data-tooltip-target="bedrooms"
                class="cursor-pointer rounded-full border border-green-500/5 bg-green-500/5 p-3 text-green-500 transition-colors hover:border-green-500/10 hover:bg-green-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="h-5 w-5"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
                </svg>
              </span>
  
              <span
                data-tooltip-target="tv"
                class="cursor-pointer rounded-full border border-green-500/5 bg-green-500/5 p-3 text-green-500 transition-colors hover:border-green-500/10 hover:bg-green-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="h-5 w-5"
                >
                  <path d="M19.5 6h-15v9h15V6z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <span
                data-tooltip-target="fire"
                class="cursor-pointer rounded-full border border-green-500/5 bg-green-500/5 p-3 text-green-500 transition-colors hover:border-green-500/10 hover:bg-green-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <span
                data-tooltip-target="more"
                class="cursor-pointer rounded-full border border-green-500/5 bg-green-500/5 p-3 text-green-500 transition-colors hover:border-green-500/10 hover:bg-green-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                +20
              </span>
  
            </div>
          </div>
          <div class="p-6 pt-3">
            <button
              class="block w-full select-none rounded-lg bg-green-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Details
            </button>
          </div>
      
  
    `;

    parent.appendChild(inside);

    
    // else{
    //   const div = document.createElement("div");

    //   div.classList.add("col-md-6");
      
    //   div.innerHTML = `
    //     <section class="py-3 py-md-5 min-vh-100 d-flex justify-content-center align-items-center">
    //         <div class="container">
    //         <div class="row">
    //             <div class="col-12">
    //             <div class="text-center">
    //                 <h2 class="d-flex justify-content-center align-items-center gap-2 mb-4">
    //                 <span class="display-1 fw-bold">4</span>
    //                 <i class="bi bi-exclamation-circle-fill text-danger display-4"></i>
    //                 <span class="display-1 fw-bold bsb-flip-h">4</span>
    //                 </h2>
    //                 <h3 class="h2 mb-2">No result found!</h3>
    //                 <p class="mb-5">Your desired recipe was not found.</p>
    //                 <!-- <a class="btn bsb-btn-5xl btn-dark rounded-pill px-5 fs-6 m-0" href="#!" role="button">Back to Home</a> -->
    //             </div>
    //             </div>
    //         </div>
    //         </div>
    //     </section>
    
    //       `;

    //   parent.appendChild(div);
      
    // }

    
  });
};

loadHome();




const loadCategory = () => {
  fetch("https://gardenhub-django.onrender.com/plants/category/")
    .then((res) => res.json())
    .then((data) => displayCategory(data))
    .catch((err) => console.log(err));
};

const displayCategory = (categories) => {
  console.log(categories);
  categories.forEach((category) => {
    console.log("all->>>",category);
    const parent = document.getElementById("category-container2");

    const li = document.createElement("li");
    li.classList.add("nav-item");
    li.innerHTML = `
    <a onclick="loadRecipies2('${category.name}')" class="d-flex align-items-center text-start mx-3 ms-0 pb-3" data-bs-toggle="pill" href="#tab-1">
          
    <i class="${icon} fa-2x text-primary"></i>
        <div class="ps-3">
          <h6 class="mt-n1 mb-0">${category.name}</h6>
          
          <small class="text-body">Recipe</small>
        </div>
    </a>
      `;
    parent.appendChild(li);
  });
};

const loadRecipies2 = (search) => {
  document.getElementById("recipies2").innerHTML = "";
  document.getElementById("spinner3").style.display = "block";
  let length = document.getElementById("length2");
  length.innerHTML = "";
  // console.log(search);
  fetch(
    `https://cookhub-django.onrender.com/recipe/list/?search=${
      search ? search : ""
    }`
  )
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      if (data.results.length > 0) {
        document.getElementById("spinner3").style.display = "none";
        document.getElementById("nodata3").style.display = "none";
        displyRecipies2(data?.results);
        // console.log(data.results.length);
      } else {
        // console.log(data);
        
        document.getElementById("recipies2").innerHTML = "";
        document.getElementById("spinner3").style.display = "none";
        document.getElementById("nodata3").style.display = "block";
      }
      
    });
};


const displyRecipies2 = (recipies) => {
  // console.log(recipies.length);
  recipies?.forEach((recipie) => {
    
    const categoryNames = recipie.category.join(', ');
    const parent = document.getElementById("recipies2");

    let length = document.getElementById("length2");
    length.innerHTML = `<h1 class="text-primary text-start">Recipe found: ${recipies.length}</h1>`;

    if(length)
    {
      const div = document.createElement("div");

      div.classList.add("col-md-6");
      
      div.innerHTML = `
      
      <div class="card text-center">
      <img src=${recipie.image} class="card-img-top w-100" alt="...">
        <div class="card-header">
        <h5 class="card-title">Name: ${recipie.title}</h5>
        
        </div>
        <div class="card-body">
          <p class="card-title">Category: ${categoryNames}</p>
          <pre class="card-text">Ingredients: ${recipie.ingredients.slice(0, 30)}...</pre>
          <p class="card-text">Instructions: ${recipie.instructions.slice(0, 50)}...</p>
          <a target="_blank" href="details.html?recipeId=${
            recipie.id
          }" class="btn btn-primary">Details</a>
        </div>
        <div class="card-footer text-muted">
        <i class="fa-solid fa-clock-rotate-left me-2"></i>Created On: ${recipie?.created_on}
        </div>
      </div>
    
          `;

      parent.appendChild(div);
    }
    else{
      const div = document.createElement("div");

      div.classList.add("col-md-6");
      
      div.innerHTML = `
        <section class="py-3 py-md-5 min-vh-100 d-flex justify-content-center align-items-center">
            <div class="container">
            <div class="row">
                <div class="col-12">
                <div class="text-center">
                    <h2 class="d-flex justify-content-center align-items-center gap-2 mb-4">
                    <span class="display-1 fw-bold">4</span>
                    <i class="bi bi-exclamation-circle-fill text-danger display-4"></i>
                    <span class="display-1 fw-bold bsb-flip-h">4</span>
                    </h2>
                    <h3 class="h2 mb-2">No result found!</h3>
                    <p class="mb-5">Your desired recipe was not found.</p>
                    <!-- <a class="btn bsb-btn-5xl btn-dark rounded-pill px-5 fs-6 m-0" href="#!" role="button">Back to Home</a> -->
                </div>
                </div>
            </div>
            </div>
        </section>
    
          `;

      parent.appendChild(div);
      
    }

    
  });
};

const handleSearch2 = () => {
  const value = document.getElementById("search2").value;
  loadRecipies2(value);
};


// loadRecipies2();
loadCategory();