import fly from '@/utils/request.js'

export const getBanners = () => fly.get('/home/swiperdata')

// 导航
export const getNavs = () => fly.get('/home/catitems')
// 楼层
export const getFloors = () => fly.get('/home/floordata')
