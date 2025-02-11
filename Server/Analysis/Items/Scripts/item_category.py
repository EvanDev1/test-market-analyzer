from Data.data import item_categories

class ItemCategory:
    def get_item_category(item_name):
        item_category = item_categories.get(item_name)
        if item_category is None:
            item_category_obj = ""
            return item_category_obj
        else:
            item_category_obj = item_category

            return item_category_obj
