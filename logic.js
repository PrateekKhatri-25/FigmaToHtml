let myhead=document.querySelectorAll("h3");
    myhead.forEach((val)=>{
        val.addEventListener("click" , ()=>{
            myhead.forEach((item)=>{
                if(item !== val){
                    item.nextElementSibling.classList.remove("active");
                    let item_itag=item.querySelector("i");
                    item_itag.classList.remove("fa-minus");
                    item_itag.classList.add("fa-plus");
                }
            })
            val.nextElementSibling.classList.toggle("active");
            let itag=val.querySelector("i");
            itag.classList.toggle("fa-minus");
            itag.classList.toggle("fa-plus")
        })
    })