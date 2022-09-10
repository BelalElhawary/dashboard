import { AiFillHome } from 'react-icons/ai'
import { RiAdminFill, RiPercentLine } from 'react-icons/ri'
import { FaUserFriends } from 'react-icons/fa'
import { BsBookFill, BsCalendar3WeekFill } from 'react-icons/bs'
import { MdPlayLesson } from 'react-icons/md'
import { IoIosPaper } from 'react-icons/io'
import { BsFilePdfFill, BsFileExcelFill, BsFileImageFill } from 'react-icons/bs';



export const gridOrderImage = (props) => (
    <img
      className="rounded-xl h-20"
      src={props.image}
      alt="order-item"/>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md">
    {props.Status}
  </button>
);

export const gridStudentAvialble = (props) => (
  <button
    type="button"
    style={{ background: `${props.available==0?'#59CE8F':'#3B9AE1'}`}}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md">
    {`${props.available==0?'Availble':'Active'}`}
    
  </button>
);

function checkItemType(name){
  return name == 'pdf'?(<BsFilePdfFill className='mt-1.5 mr-1'/>):name == 'exam'?(<BsFileExcelFill className='mt-1.5 mr-1'/>):(<BsFileImageFill className='mt-1.5 mr-1'/>)
}

function checkItemStyle(name)
{
  return name == 'pdf'? '#C21010':name=='exam'?'#277BC0':'#FFB200'
}

let currentItem = {}

export const gridLessonContent = (props) => (
  <div className='h-fit w-fit'>
    {JSON.parse(props.content).map((item) => <div style={{display: 'flex', textAlign: 'center', backgroundColor: checkItemStyle(item.type)}} className='m-1 pl-2 pr-4 rounded-full text-white text-lg'>{checkItemType(item.type)}{}<br></br><input type='text' placeholder='title' value={item.title}/></div>)}
  </div>
);

export const lessonsGrid = [
  //{ type: 'checkbox', width: '50' },
  {
    field: 'id',
    headerText: 'ID',
    width: '50',
    textAlign: 'Left',
    allowEditing: false,
  },
  {
    field: 'image',
    template: gridOrderImage,
    width: '120',
    textAlign: 'Left',
  },

  {
    field: 'name',
    headerText: 'Name',
    width: '160',
    textAlign: 'Left',
  },
  {
    field: 'link',
    headerText: 'Video Link',
    width: '160',
    textAlign: 'Left',
  },
  {
    field: 'description',
    headerText: 'Description',
    width: '160',
    textAlign: 'Left',
  },
  {
    field: 'content',
    headerText: 'Content',
    width: '200',
    allowEditing: true,
    //template: gridLessonContent,
    textAlign: 'Left',
  },
];

export const adminsGrid = [
  //{ type: 'checkbox', width: '50' },
  {
    field: 'id',
    headerText: 'ID',
    width: '50',
    allowEditing: false,
    textAlign: 'Left',
  },
  {
    field: 'name',
    headerText: 'Name',
    width: '160',
    textAlign: 'Left',
  },
  {
    field: 'email',
    headerText: 'Email',
    width: '160',
    textAlign: 'Left',
  },
  {
    field: 'password',
    headerText: 'Password',
    width: '160',
    textAlign: 'Left',
  }
];
export const studentsGrid = [
  //{ type: 'checkbox', width: '50' },
  {
    field: 'id',
    headerText: 'ID',
    allowEditing: false,
    width: '50',
    textAlign: 'Left',
  },
  {
    field: 'code',
    headerText: 'Code',
    allowEditing: false,
    width: '80',
    textAlign: 'Left',
  },
  {
    field: 'name',
    headerText: 'Name',
    width: '100',
    textAlign: 'Left',
  },
  {
    field: 'available',
    template: gridStudentAvialble,
    allowEditing: false,
    width: '80', 
    textAlign: 'Left',
  },
  {
    field: 'pn',
    headerText: 'Phone Number',
    //editType: 'numericedit',
    width: '80',
    textAlign: 'Left',
  },
  {
    field: 'ppn',
    headerText: 'Phone Number',
    //editType: 'numericedit',
    width: '80',
    textAlign: 'Left',
  },
  {
    field: 'country',
    headerText: 'Country',
    width: '80',
    textAlign: 'Left',
  },
  
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'home',
        icon: <AiFillHome className='mt-1' />
      }
    ]
  },
  {
    title: 'Pages',
    links: [
      {
        name: 'lessons',
        icon: <BsBookFill className='mt-1' />
      },
      {
        name: 'admins',
        icon: <RiAdminFill className='mt-1' />
      },
      {
        name: 'students',
        icon: <FaUserFriends className='mt-1' />
      }
    ]
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'calendar',
        icon: <BsCalendar3WeekFill className='mt-1' />
      },
      // Still in development
      /*{
        name: 'community',
        icon: <TbSocial className='mt-1' />
      },
      {
        name: 'messages',
        icon: <AiFillWechat className='mt-1' />
      },
      {
        name: 'exmaker',
        icon: <BsFillPenFill className='mt-1' />
      },*/
    ]
  }
]

export const earningData = [
  {
    title: 'Uploaded Lessons',
    icon: <MdPlayLesson />,
    iconColor: '#EDDFB3',
    iconBg: '#293462',
    amount: 24,
    percentage: '-2%',
    pcColor: 'red-500'
  },
  {
    title: 'Uploaded Exams',
    icon: <IoIosPaper />,
    iconColor: 'white',
    iconBg: '#FF1E00',
    amount: 7,
    percentage: '+10%',
    pcColor: 'green-500'
  },
  {
    title: 'Current Admins',
    icon: <RiAdminFill />,
    iconColor: '#F7ECDE',
    iconBg: '#100F0F',
    amount: 10,
    percentage: '+5%',
    pcColor: 'green-500'
  },
  {
    title: 'Average Degree',
    icon: <RiPercentLine />,
    iconColor: '#C2DED1',
    iconBg: '#354259',
    amount: '95%',
    percentage: '+1.2%',
    pcColor: 'green-500'
  }
]

export const scheduleData = [JSON.parse(`{"Subject":"Add title","Id":1,"StartTime":"2022-08-16T07:30:00.000Z","EndTime":"2022-08-16T08:00:00.000Z","IsAllDay":false,"Guid":"fa5540a7-89e9-bc08-79cc-2c94dd58ac7c","Location":"asdasdasd","StartTimezone":"Africa/Cairo","EndTimezone":"Africa/Cairo","Description":"asdasdasdasd","RecurrenceRule":"FREQ=WEEKLY;BYDAY=TU;INTERVAL=1;UNTIL=20221015T073000Z;"}`)];