export default function ProfileCard(){

    const profileInfo = [
        {
            name: "Filo Puni Vaesau",
            role: ['Full Stack Developer', 'Digital Craftsman'],
            size: '250px'
        }
    
    ]

    return(
        <div>
            <img src="" alt="" style={{width: profileInfo.size, height: profileInfo.size}}/>
            <h1>{profileInfo.name}</h1>
            <h3>{profileInfo.role}</h3>
        </div>
    )
}