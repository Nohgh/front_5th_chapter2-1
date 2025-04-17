import ITEMS from '../../constants/items';
import { Item } from '../../types/items';
import { SUGGEST_DISCOUNT_RATE } from './constants';

// let recentSelectedId = new RecentSelectedId().get();
let recentSelectedId; //

const getSuggestItem = () => {
  return ITEMS.find((item) => item.id !== recentSelectedId && item.stock > 0);
};

const calculateSuggestItemPrice = (suggestItem: Item) => {
  return Math.round(suggestItem.price * SUGGEST_DISCOUNT_RATE);
};

const suggest = () => {
  if (!recentSelectedId) return;

  let suggestItem = getSuggestItem();
  if (!suggestItem) return;

  alert(suggestItem.name + '은(는) 어떠세요? 지금 구매하시면 5% 추가 할인!');
  suggestItem.price = calculateSuggestItemPrice(suggestItem);
};

export default suggest;
