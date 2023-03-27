import './picture-modal.js';
import './picture-load-modal.js';
import './picture-upload-form-check.js';
import './set-picture-size.js';
import './set-picture-filter.js';

import {closeUserModal} from './picture-load-modal.js';
import {setUserFormSubmit} from './picture-upload-form-check.js';

setUserFormSubmit(closeUserModal);
