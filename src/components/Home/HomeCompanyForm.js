import React from 'react'

const HomeCompanyForm = props => {
	return(
        <form className="companyForm">
            <label className="label">ФИО</label>
            <div className="form-group" name="name">
                <input type="text" className="form-control" value={props.form.name} onChange={e => props.updateCompanyFormValue('name', e.target.value)}/>
            </div>

            <label className="label">Компания и должность</label>
            <div className="form-group" name="company">
                <input type="tel" className="form-control" value={props.form.company} onChange={e => props.updateCompanyFormValue('company', e.target.value)}/>
            </div>

            <label className="label">Номер телефона</label>
            <div className="form-group" name="phone">
                <input type="tel" className="form-control" value={props.form.phone} onChange={e => props.updateCompanyFormValue('phone', props.formatPhoneNumber(e.target.value))}/>
            </div>

            <label className="label">E-mail</label>
            <div className="form-group" name="mail">
                <input type="e-mail" className="form-control" value={props.form.email} onChange={e => props.updateCompanyFormValue('email', e.target.value)}/>
            </div>

            <label className="label">Комментарий</label>
            <div className="form-group" name="comment">
                <textarea type="text" className="form-control" value={props.form.comment} onChange={e => props.updateCompanyFormValue('comment', e.target.value)}/>
            </div>
        </form>
    )
}
export default HomeCompanyForm