const shopName = document.getElementById("shop-name");

const loadPage = (page) => {
  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("page-content").innerHTML = data;
    })
    .catch((error) => console.error("Error loading page:", error));
};
loadPage("general/general.html");
