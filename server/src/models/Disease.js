const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredNumber = {
  type: Number,
  required: true,
};

const string = {
  type: String
}

const atleastOneSymptom = val => val.length > 0 && val.length <=20;

const DiseaseSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  symptoms: {
    type: [ string ],
    validate: [ atleastOneSymptom, 'Please enter at least one symptom' ]
  },
  medicines: [ string ],
  status: {
    type: String,
    default: 'infected',
    enum: ['infected', 'cured'],
  },
  latitude: {
    ...requiredNumber,
    min: -90,
    max: 90,
  },
  longitude: {
    ...requiredNumber,
    min: -180,
    max: 180,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  infectedPersonsName: { ...string }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Disease', DiseaseSchema);
