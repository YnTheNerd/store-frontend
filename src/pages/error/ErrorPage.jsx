import { Header } from "../../components/Header"

export function ErrorPage({cart}){

    return(
        <>
             <link rel="icon" type="image/svg+xml" href="images/favicon/home-favicon.png" />
                        <Header cart={cart} />
      
           
           <h3 style={{margin: '100px  35%', padding: '15px'} }>Page not found</h3>
           
        </>
    )
}