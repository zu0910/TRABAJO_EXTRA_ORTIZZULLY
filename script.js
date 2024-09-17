var url = "https://www.datos.gov.co/resource/uea5-is6n.json";
const conte = document.getElementById("complemento");

mostrar(url);

function mostrar(url){
    fetch(url)
        .then(res => res.json())
        .then(data => {
            for (const i of data){
                conte.innerHTML+=`
                
                    <tr>
                        <td>${i.departamento}</td>
                        <td>${i.anhodesmovilizacion}</td>
                        <td>${i.numerodesmovilizados}</td>
                        <td>${i.fechacorte}</td>
                        <td>${i.fechaactualizacion}</td>
                    </tr>
                      
                `
            }
            
        })
}