import Thread from './thread';
import FacultySubForum from './facultySubForum';

export default class SubForum {
    id:number;
    name:string;
    studyCourse:any;
    threads:Thread[];
    subFacultyForum:FacultySubForum;
}