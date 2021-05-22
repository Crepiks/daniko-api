import { Model } from 'objection';

class ContactModel extends Model {
  static tableName = 'contacts';

  id: number;
  phone: string;
  email: string;
  postIndex: string;
  address: string;
  lat: number;
  lon: number;
  createdAt: string;
}

module.exports = ContactModel;
export default ContactModel;
