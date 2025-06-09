import html from '../core.js'
import Header from './Header.js'
import TodoList from './TodoList.js'
import Footer from './Footer.js'
import { connect } from '../store.js'

const connector = connect()

function App({ todos }) {
  return html` 
        <section class="todoapp">
            ${Header()}
            ${todos.length > 0 && TodoList()}
            ${todos.length > 0 && Footer()}
        </section> 
    `
}

export default connector(App)

/*Công việc 
    1. Render 
    2. Thêm (Code thêm logger để xem các hoạt động trước và sau)
    3. local storage (Lưu lại khi F5)
    4. Không có todo nào thì ẩn TodoList và Footer (App)
    5. Fix bug nhập khoảng trắng 
    6. Check thì nó gạch chéo và lưu lại storage
    7. Check All (Viết điều kiện lọc)
    8. Xóa
    9. Đếm 0 item left (Chưa hoàn thành)
    10. Lọc All - Active - Completed
    11. Xử lí clear completed không có completed thì ẩn đi
    12. Xóa complete khi click button clear completed
    13. Sửa (Enter và Blur ra ngoài)
    14. Sửa thành không có gì thì xóa nó đi
    15. Esc thoát khỏi Edit
    
    
*/