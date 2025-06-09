/*(Ví dụ ban đầu)
const cars = ['BMW','Porsche','Mercesder']
const isSuccess = false
const output = html`
    <h1>${isSuccess && 'Thành công'}</h1>
    <ul>
        ${cars.map(car => `<li>${car}</li>`)}
    </ul>
`
console.log(output)*/

export default function html([first, ...strings], ...values){ //values là biến nội suy
    return values.reduce(
        // //C1 (Ưu tiên dùng vì concat nó sẽ tự động xóa dấu phẩy)
        (acc, cur) => acc.concat(cur, strings.shift()),
        [first]
        //C2
        // (acc, cur) => [...acc, cur, strings.shift()],
        // [first]
        //C3
        // (acc, cur) => acc + cur + strings.shift(),
        // first
    )
    //Loại bỏ giá trị true false và lấy số 0
    .filter(x => x && x!== true ||x===0).join('') 
}

//Tất cả mọi dữ liệu đều chạy qua Store
export function createStore(reducer){
    let state = reducer() //callback 

    //Map() (key (Object DOM: div#roor) => value) 
    const roots = new Map() 

 
    function render(){
        //component là thành phần (hàm) chứa view (state) và return html
        for(const [root, component] of roots){ //Detructuring
            const output = component() 
            root.innerHTML = output
        }            
    }

    return {
        //Đẩy component ra root giao diện
        attach(component, root){
            roots.set(root, component) //key - value
            render()
        },

        //Đẩy dữ liệu State từ Store vào component
        //selector: Lựa chọn một phần state phù hợp
        //props: Là công cụ là dữ liệu muốn truyền vào component sau này (Truyền dữ liệu từ bên ngoài vào component)
        //state: (Quản lý dữ liệu nội bộ của component)
        //return component => Phải định nghĩa mới được truyền vào nên tham số là component
        connect(selector = state => state){
            return component => (props, ...agrs) =>
                component(Object.assign({}, props, selector(state), ...agrs)) 
        },
        
        //Thực hiện các hành động action cập nhật state mới
        dispatch(action, ...agrs){ //[1,2]
            state = reducer(state, action, agrs) //[1,2]
            render()
        }

    }


}