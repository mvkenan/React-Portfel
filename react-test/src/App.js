import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <><><><header class="başlıq">
      <div class="logo">
        <p>portfel</p>
      </div>
      <div class="nav">
        <ul class="nav-list">
          <li><a href="app.js">Ana Səhifə</a></li>
          <li><a href="müştərilər.html">Müştərilər</a></li>
          <li><a href="xidmətlər.html">Xidmətlər</a></li>
        </ul>
      </div>
    </header></><><section class="pankart">
      <div class="detaylar">

        <p class="p1">
          Salam
        </p>
        <p class="p2">
          Mənim Adım Kənandır
        </p>
        <p class="p3">
          Developer | Tələbə
        </p>
        <button class="məs"><a href="əlaqə.html">
          Mənimlə Əlaqə Saxlayın
        </a>

        </button>
      </div>
    </section><section class="xidmətlər">
          <h1 class="xid"> Göstərdiyim Xidmətlər </h1>
          <div class="xidmət">
            <div class="xidmətlər-2">
              <i class="fa-solid fa-laptop-code ikon"></i>
              <h2>Veb Dizayn</h2>
              <p class="xid-yazi">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia esse ut sed? Vitae quaerat neque similique facilis nobis deserunt sunt esse minima est voluptate</p>
              <button class="xid-but"><a href="xidmətlər.html">Daha Cox</a></button>
            </div>
            <div class="xidmətlər-2">
              <i class="fa-solid fa-chart-line ikon"></i>
              <h2>Marketing</h2>
              <p class="xid-yazi">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia esse ut sed? Vitae quaerat neque similique facilis nobis deserunt sunt esse minima est voluptate</p>
              <button class="xid-but"><a href="xidmətlər.html">Daha Cox</a></button></div>
            <div class="xidmətlər-2">
              <i class="fa-solid fa-pen-fancy ikon"></i>
              <h2>Qrafika</h2>
              <p class="xid-yazi">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia esse ut sed? Vitae quaerat neque similique facilis nobis deserunt sunt esse minima est voluptate</p>
              <button class="xid-but"><a href="xidmətlər.html">Daha Cox</a></button>          </div>
            <div class="xidmətlər-2">
              <i class="fas fa-mobile-alt ikon"></i>
              <h2>App Developer</h2>
              <p class="xid-yazi">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia esse ut sed? Vitae quaerat neque similique facilis nobis deserunt sunt esse minima est voluptate</p>
              <button class="xid-but"><a href="xidmətlər.html">Daha Cox</a></button></div>
          </div>
        </section></></><div class="footer">
        <ul>
          <li>
            <a href="https://www.facebook.com/share/9L6mnwxdz5VGcdsw/" target="_blank">
              <i class="fa-brands fa-facebook-f"></i>
              <span>- Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://x.com/mvkenann?s=11&t=ULln_0C2j1e_IY7mRx7uuA" target="_blank">
              <i class="fa-brands fa-twitter"></i>
              <span>-Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@mvkenan?_t=8hdkQ5ZjBTk&_r=1 " target="_blank">
              <i class="fa-brands fa-tiktok"></i>
              <span>-TikTok</span>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/mvkenann?utm_source=qr" target="_blank">
              <i class="fa-brands fa-instagram"></i>
              <span>-İnstagram</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/mvkenan" target="_blank">
              <i class="fa-brands fa-github"></i>
              <span>- Github</span>
            </a>
          </li>
        </ul>

      </div></>
  );
}

export default App;
