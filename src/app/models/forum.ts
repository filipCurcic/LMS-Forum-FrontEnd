import FacultySubForum from './facultySubForum';
import ForumUser from './forumUser';

export default class Forum {
    id:number;
    public:boolean;
    subForums:FacultySubForum[];
    users:ForumUser[];
    
}