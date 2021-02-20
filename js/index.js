let hideOnScroll = document.querySelector(".hide-scroll");
let documentHeight = 0;
document.addEventListener("scroll", (e) => {
  let currentTop = pageYOffset || document.documentElement.scrollTop;
  if (currentTop > documentHeight) {
    hideOnScroll.style.height = 0;
  } else {
    hideOnScroll.style.height = "auto";
  }

  documentHeight = currentTop;
});

let storeItems = document.getElementById("store-items");

fetch("https://fakestoreapi.com/products/")
  .then((res) => res.json())
  .then((json) => {
    json.forEach((item) => {
      storeItems.insertAdjacentHTML(
        "beforeend",
        `<div class="shop-card col-12 col-md-6 col-lg-4 p-4">
<div class="rounded">
  <div class="card-img">
    <img src=${item.image} alt="bb" srcset="" />
  </div>
  <div class="card-details rounded-bottom text-success">
    <div
      class="d-flex justify-content-between align-items-center"
    >
      <div class="h-100">
        <div class="item-name">${item.title}</div>
        <div class="item-price">
          <span class="currency">NGN</span
          ><span class="price">${item.price * 500}</span>
        </div>
      </div>
      <div class="add-to-cart"><button class="btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
    </svg></button></div>
    </div>
  </div>
</div>
</div>
`
      );
    });
  });
