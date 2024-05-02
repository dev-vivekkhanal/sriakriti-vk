import edit_icon from '../assets/icons/admit-edit.svg'
import delete_icon from '../assets/icons/admin-delete.svg'

const admiOrdersApi = {
    page_name: 'Products',
    titles: [
        'ID', 'Name', 'Category', 'Action'
    ],
    page_number_data: ['1','2','3','4','5','6','7','8','9','10'],
    products: [
        {order_id: 'GH31', order_name: 'SAA-w2-006', order_category: 'Ring', icon_edit: edit_icon, icon_delete: delete_icon,},
        {order_id: 'GH32', order_name: 'SAA-w2-009', order_category: 'Necklace', icon_edit: edit_icon, icon_delete: delete_icon,},
        {order_id: 'GH33', order_name: 'SAA-w2-001', order_category: 'Necklace', icon_edit: edit_icon, icon_delete: delete_icon,},
        {order_id: 'GH34', order_name: 'SAA-w2-007', order_category: 'Bracelet', icon_edit: edit_icon, icon_delete: delete_icon,},
        {order_id: 'GH35', order_name: 'SAA-w2-002', order_category: 'Ring', icon_edit: edit_icon, icon_delete: delete_icon,},
        {order_id: 'GH36', order_name: 'SAA-w2-005', order_category: 'Necklace', icon_edit: edit_icon, icon_delete: delete_icon,},
        {order_id: 'GH37', order_name: 'SAA-w2-004', order_category: 'Chain', icon_edit: edit_icon, icon_delete: delete_icon,},
        {order_id: 'GH38', order_name: 'SAA-w2-008', order_category: 'Chain', icon_edit: edit_icon, icon_delete: delete_icon,},
        {order_id: 'GH39', order_name: 'SAA-w2-0010', order_category: 'Ring', icon_edit: edit_icon, icon_delete: delete_icon,},
        {order_id: 'GH40', order_name: 'SAA-w2-003', order_category: 'Bracelet', icon_edit: edit_icon, icon_delete: delete_icon,},
    ]
}

export default admiOrdersApi