import { Dropdown,Space } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next';
import { FaBars } from 'react-icons/fa';
import { categoriesItems } from './categoriesItems';
import { MdKeyboardArrowDown } from 'react-icons/md';


const AllCategoryMenu = ({ismenu,icons, className}) => {
  const {t} = useTranslation();

  return (
    <Dropdown menu={{ items:categoriesItems }} trigger={['click']}>
      <div className={className}>
        {ismenu &&  <FaBars/>}
            {t('AllCategories')}
            {icons && (
              <span>
                <MdKeyboardArrowDown size={24}/>
              </span>
            )}{" "}
      </div>
    </Dropdown>
  
  )
}

export default  AllCategoryMenu