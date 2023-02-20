let paragraphs = [

    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, eum iusto. Alias illum corporis quod nesciunt ipsum aperiam ex vitae.",

    "consectetur adipisicing elit. Obcaecati, consectetur. Esse facere, sapiente non iure minus neque similique impedit fugit harum unde ratione amet. Eaque animi placeat accusamus, eveniet suscipit ullam? Alias reprehenderit aspernatur sequi porro numquam repellendus fuga evenietLorem, ipsum dolor sit amet",

    "a alias distinctio nihil deleniti nam laudantium porro atque nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel similique neque, sint tempora voluptatem dignissimos! Autem vel doloribus, ",

    "amet quo deleniti eius consectetur cumque officiis excepturi corporis provident odio reiciendis totam tenetur unde, sequi repudiandae optio culpa dolores. Quis sed eum ducimus!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium incidunt ipsum, consequuntur dolorem quod nam velit",

    "blanditiis consectetur amet, quaerat repellat voluptas tempora aspernatur neque iusto nostrum delectus, illum, accusamus quas fugiat inventore. Voluptas, perferendis quae.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam ipsam officiis architecto reiciendis aperiam eaque perferendis ",

    "aliquid, corrupti pariatur ipsam, accusamus maxime aliquam. Dolor, nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque totam quos consequatur est a ducimus cupiditate id, hic exercitationem quis ",

    "beatae maiores nisi modi magnam laborum optio consequatur asperiores, deleniti eveniet tenetur accusamus totam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eos aperiam eligendi illo sapiente porro esse corporis libero consequuntur reiciendis! Consequuntur impedit voluptatem facere officia eligendi illo recusandae at perferendis eum fugiat nobis ",

    "necessitatibus nostrum dolore pariatur sit dolorem optio similique vel numquam alias iste, incidunt velit consequatur tenetur cupiditate omnis!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, ut! Unde obcaecati modi est eaque adipisci quas odit illo ",


    "repudiandae blanditiis, atque facilis vel non dolor modi, laboriosam dignissimos delectus, quo aliquam! Consequuntur, tempora?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt numquam porro dolore suscipit velit mollitia libero impedit dicta distinctio alias ",


    "nobis voluptatem, ipsam sunt fuga ullam, beatae rem illum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ex recusandae quasi. Qui quia aspernatur provident ",

    "cupiditate aspernatur, quia similique, obcaecati rem incidunt cumque quam eligendi doloremque enim accusamus quas sunt quae at laborum tempore nostrum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas sit laboriosam assumenda quas eos dolores corrupti, cupiditate impedit commodi dolore molestias amet eligendi, nam accusantium vero. Exercitationem ",

    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quisquam libero eaque, minus aperiam quae explicabo vitae rem ullam commodi id sit porro dolorum, recusandae, illum cumque natus numquam deserunt earum reprehenderit dolore nobis! Ipsam quia sunt vitae quas beatae neque libero, earum illo temporibus? Nulla saepe laborum nesciunt?",
    
    
    "Non nobis facere velit autem optio quod ut totam molestias eaque eligendi ipsam illo, nostrum libero praesentium aliquam ab voluptate eius dolores sed necessitatibus fugit tempora deserunt inventore! Temporibus dolore accusantium at dolorum, enim provident et blanditiis maiores architecto itaque eligendi autem repudiandae",
    
    
    "rerum tenetur voluptates in molestiae, deleniti perferendis vel ab dignissimos. Est modi ipsam, reprehenderit perferendis distinctio nulla, in quaerat voluptas odit odio excepturi, mollitia illo sed voluptate? Expedita blanditiis quasi, saepe cum accusantium velit vel eum quisquam totam odit, iusto ",
    
    "quibusdam corporis similique itaque iste optio alias ad porro! Nostrum pariatur reiciendis consectetur expedita assumenda quaerat quia quo cumque corporis neque, fugit debitis distinctio, ipsum, ipsam culpa. A ea dolorum commodi itaque minima tenetur sed iusto magnam ullam repudiandae, aspernatur officia quam quisquam sapiente recusandae dolorem. Corrupti, corporis esse. Obcaecati eligendi veritatis voluptate error ipsam iste", 
    
    
    "amet atque illum blanditiis est non, debitis nostrum praesentium a cupiditate provident. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, nam saepe error autem itaque quas fugiat nobis quasi inventore esse?"


]

let getbtn = document.getElementById("generate");
let setdata = document.getElementById("dataset");
const setpara = () => {
    var getinputvalue = document.getElementById("number").value;
    console.log(getinputvalue)
    if (isNaN(getinputvalue) || getinputvalue <= 0 || getinputvalue > paragraphs.length) {
        const randomnumber = Math.floor(Math.random() * paragraphs.length);

        setdata.innerHTML = `<p>${paragraphs[randomnumber]}</p>`
    } else {
        const data = paragraphs.slice(0, getinputvalue)
        const paras = data.map(
            (d) => {
                return `<p>${d}</p></br>`
            }
        )

        setdata.innerHTML = paras.join("");

    }

}



