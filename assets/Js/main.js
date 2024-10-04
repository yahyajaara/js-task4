async function getsource()
{
    const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    const data = await response.json();
    
    
    const result = data.recipes.map(function(source)

        {
            return`
            
              <div class = "pizza">

                    <h3> ${source.title} </h3>
                    <img src = "${source.image_url}" alt = "${source.title}" />

              </div>

            `;
        }

    ).join('');
   

    document.querySelector(".products .product").innerHTML += result;
    

}

getsource();