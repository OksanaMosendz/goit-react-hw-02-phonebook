export const Filter = ({ onChangeFilter, filter }) => {
  return (
<label> Find contacts by name
        <input
  type="text"
            value={filter}
            onChange={onChangeFilter}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
  required
/> </label>
  )
} 