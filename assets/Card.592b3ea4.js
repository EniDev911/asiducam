import{C as o}from"./Card.cb483961.js";import{a as i,j as a,w as d,m,e as g}from"./index.82405128.js";const b={container:"bg-dark bg-gradient",title:"text-gray fs-4",image:"w-75 filter",popup:"bg-dark bg-gradient border p-0 col-10 col-md-6 col-lg-6 col-xl-5",footer:"bg-dark p-2",confirmButton:"bg-danger fs-5 p-2"},p={customClass:b,showConfirmButton:!1,color:"#ccc",showCloseButton:!0},u=({image:e,image2:t,title:r,description:s,light:c=!1})=>{const n=d(g);return i(o,{className:c?"h-100 pointer bg-light text-dark border-0":"h-100 pointer bg-secondary text-gray border-0 hover-card",onClick:()=>{const l=m("asocgremial.camionescoquimbo@gmail.com",`Cotizar ${r}`);n.fire({...p,imageUrl:t,title:r,html:`
      <p>${s}</p>
      <a href="${l}"
        target="_blank"
        class="btn btn-gray w-100 my-3">
        Cotizar 
      </a>
    `})},children:[a(o.Img,{variant:"top",src:e,className:"d-block card-img-service rounded-circle border border-2 w-75 mx-auto m-3"}),a(o.Body,{children:a(o.Title,{className:"text-center fs-5",children:r})})]})};export{u as C};
