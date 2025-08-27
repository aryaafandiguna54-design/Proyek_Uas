let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product, price, size) {
  cart.push({ product, price, size });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product + " (Ukuran: " + size + ") berhasil ditambahkan ke keranjang!");
}

function loadCart() {
  let table = document.querySelector("#cart-table tbody");
  if (!table) return;

  table.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    let row = `<tr>
      <td>${item.product}</td>
      <td>${item.size}</td>
      <td>Rp ${item.price}</td>
    </tr>`;
    table.innerHTML += row;
    total += item.price;
  });

  document.getElementById("total").innerText = total;
}

function checkout() {
  if (cart.length === 0) {
    alert("Keranjang kosong!");
    return;
  }

  let metode = document.querySelector("input[name='pembayaran']:checked");
  if (!metode) {
    alert("Pilih metode pembayaran dulu!");
    return;
  }

  alert("Pembayaran berhasil dengan metode: " + metode.value + "\nTerima kasih sudah belanja!");
  cart = [];
  localStorage.removeItem("cart");
  loadCart();
}

// Panggil loadCart jika di halaman checkout
window.onload = loadCart;
