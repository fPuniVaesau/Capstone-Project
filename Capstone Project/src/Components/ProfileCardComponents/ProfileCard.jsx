export default function ProfileCard({profilePic, name, role, bio, location, banner}){
    return(
        <div>
            <img src={profilePic} alt="Profile Picture" />
            <h1>{name}</h1>
            <h2>{role}</h2>
            <h3>{location}</h3>
        </div>
    )
}