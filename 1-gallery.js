import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as o}from"./assets/vendor-CgTBfC_f.js";const n="/goit-js-hw-09/assets/1-small-D3NUZRsd.png",a="/goit-js-hw-09/assets/1-C_lvc8yv.png",r="/goit-js-hw-09/assets/2-small-DYYtMGV3.png",g="/goit-js-hw-09/assets/2-DrDETnal.png",l="/goit-js-hw-09/assets/3-small-Bfi5VZXj.png",p="/goit-js-hw-09/assets/3-DtxIXHlg.png",c="/goit-js-hw-09/assets/4-small-CNKi1MxW.png",w="/goit-js-hw-09/assets/4-Cb5Qc2cd.png",j="/goit-js-hw-09/assets/5-small-DUwKeUNE.png",m="/goit-js-hw-09/assets/5-D0q6LKwA.png",h="/goit-js-hw-09/assets/6-small-CBKjlSpK.png",v="/goit-js-hw-09/assets/6-DFp3aWPT.png",d="/goit-js-hw-09/assets/7-small-BObHn9PW.png",D="/goit-js-hw-09/assets/7-C7kcaZw7.png",y="/goit-js-hw-09/assets/8-small-sIT7kkFw.png",C="/goit-js-hw-09/assets/8-DmjoYe6n.png",f="/goit-js-hw-09/assets/9-small-BUgPCqfW.png",b="/goit-js-hw-09/assets/9-CoihmV2e.png",k=[{preview:n,original:a,description:"Название первой картинки"},{preview:r,original:g,description:"Название второй картинки"},{preview:l,original:p,description:"Название третьей картинки"},{preview:c,original:w,description:"Название четвертой картинки"},{preview:j,original:m,description:"Название пятой картинки"},{preview:h,original:v,description:"Название шестой картинки"},{preview:d,original:D,description:"Название седьмой картинки"},{preview:y,original:C,description:"Название восьмой картинки"},{preview:f,original:b,description:"Название девятой картинки"}],u=document.querySelector(".gallery");function K(s){return s.map(({preview:i,original:e,description:t})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e}">
            <img
              class="gallery-image"
              src="${i}"
              alt="${t}"
            />
          </a>
        </li>
      `).join("")}u.insertAdjacentHTML("beforeend",K(k));new o(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
