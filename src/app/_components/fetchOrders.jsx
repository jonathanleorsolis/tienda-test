export async function FetchOrders(){
    const token = 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ2UVpKeGtYWHB4Vm12bGRNZXp2VG5LcERkcGJXdXkxWCIsImlhdCI6MTcwNjA1NDE0OTgxNywic3ViIjoiNjViMDUyMDViMmMyNzcwMDAyODViNzc0In0.YveDrfjTkgSfP62cjX9qTy50WXkvBn4Oz8_drncGfO0p5V3MPDx8uvS-eBuW4hd9NnDpHYEaqC_eB0ZBHqF0Lw '
    const res = await fetch(`https://eshop-deve.herokuapp.com/api/v2/orders`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if(!res.ok){
        throw new Error('Something went wrong')
    }
    const orders = await res.json()
    return orders
}