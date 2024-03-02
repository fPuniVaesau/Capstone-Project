export default function ProfileCard({profilePic, name, role, bio, location, banner}){
    return(
        <div>
            <img src={profilePic} alt="Profile Picture" />
            <h2>{name}</h2>

        </div>
    )
}