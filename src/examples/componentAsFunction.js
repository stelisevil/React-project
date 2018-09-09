const Category = ({ categoriesInfo, taskCategories }) => {
  let eachTaskCategory = props.taskCategories.map((categoryId, i) => {
    let eachCategory = categoriesInfo.find( category => category.id === categoryId )
    return (
      <span
        key={i}
        className="dot"
        style={{
          backgroundColor: eachCategory.colour
        }}
        data-toggle="tooltip"
        data-placement="top"
        title={eachCategory.category}
      />
    )
  })
  return eachTaskCategory
}
