export default function NavBar(){
    const navItems = ['About', 'Projects', 'Join']
    return(
        <div>
            <ul>
                {navItems.map(item=>(<li key={item}>{item}</li>))}
            </ul>
        </div>
    )
}