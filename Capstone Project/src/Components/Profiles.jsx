
export default function Profiles (){
    const students = [
        {
            name: 'Filo Puni Vaesau',
            age: 31,
            location: 'San Francisco, Ca',
            role: ['Full Stack Developer', 'Digital Craftsman']
        },
        {
            name: 'Morgan Simone Vaesau',
            age: 26,
            location: 'Castro Valley, Ca',
            role: ['Social Worker']
        },
        {
            name: 'Milo Vaesau',
            age: 10,
            location: 'Dublin, Ca',
            role: ['Full Time Student']
        }
    ]

    return(
        <div>
            {students.map(student=>{return <li>{student.name} | {student.role[0]} | {student.location}
            </li>})}
        </div>
    );
}

