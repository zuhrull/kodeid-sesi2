const scienceClass = [
  {
    name: 'Dani',
    semester: 5,
    ipk: 3.9,
    rumah: 'bintaro'
  },
  {
    name: 'Salma',
    semester: 5,
    ipk: 3.6,
    rumah: 'pondok labu'
  },
  {
    name: 'Heru',
    semester: 5,
    ipk: 3.1,
    rumah: 'pondok Cabe'
  }
]

const getAllStudentName = () => {
  // 0 - 1 - 2
  for(let i = 0;i < scienceClass.length;i++) {
    console.log('name', scienceClass[i].name)
    console.log('rumah', scienceClass[i]['rumah'])
  }
}

getAllStudentName();
