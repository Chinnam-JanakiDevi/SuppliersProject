import './usersList.css';
import AdminNav from '../adminNavbar/adminNav'

export const UsersList = () => {
    return (
        <>

            <AdminNav />
            <table class="tbl">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>work</th>
                        <th>place</th>
                        <th>Amount</th>
                        <th>freeToday</th>
                        <th colspan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0001</td>
                        <td>John Doe</td>
                        <td>Active</td>
                        <td>John@gmail.com</td>
                        <td>Active</td>
                        <td>yes</td>
                        <td>
                            <button class="btn_edit"><i class="fa fa-edit"></i></button>
                        </td>
                        <td data-label="Delete">
                            <button class="btn_trash"><i class="fa fa-trash"></i></button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </>
    )
}