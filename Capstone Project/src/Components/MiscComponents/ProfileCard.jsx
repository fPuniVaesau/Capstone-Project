export default function ProfileCard({}) {
  const profileInfo = [
    {
      name: 'Filo Puni Vaesau',
      role: ['Full Stack Developer', 'Digital Craftsman'],
      size: '250px',
    },
  ];

  return (
    <div>
      <img
        src='https://media.licdn.com/dms/image/D5603AQGM_vst3jwX6Q/profile-displayphoto-shrink_400_400/0/1699300130843?e=1712793600&v=beta&t=S6wYNYMcTlIMZ2eLMYY0x0G7GRHNGa-6BYVa6u0dN00'
        alt=''
        style={{ width: profileInfo.size, height: profileInfo.size }}
      />
      <h1>{profileInfo.name}</h1>
      <h3>{profileInfo.role}</h3>
    </div>
  );
}
