import { db } from "../config/db";

var DataTypes = require("sequelize").DataTypes;

module.exports = function() {
  return db.sequelize.define('events', {
    payload: {
      type: DataTypes.JSON,
      allowNull: false
    },
    alert_id: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    task_instance_id: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    visit_id: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    caregiver_id: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    payload_as_text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rejected_event_id: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    observation_event_id: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    timestamp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    id: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      primaryKey: true
    },
    event_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    care_recipient_id: {
      type: DataTypes.CHAR(36),
      allowNull: true
    }
  }, {
    tableName: 'events',
    timestamps: false,
    indexes: [
      {
        name: "idx_events_alert_id",
        using: "BTREE",
        fields: [
          { name: "alert_id" },
        ]
      },
      {
        name: "idx_events_task_instance_id",
        using: "BTREE",
        fields: [
          { name: "task_instance_id" },
        ]
      },
      {
        name: "idx_events_visit_id",
        using: "BTREE",
        fields: [
          { name: "visit_id" },
        ]
      },
      {
        name: "idx_caregiver_id",
        using: "BTREE",
        fields: [
          { name: "caregiver_id" },
        ]
      },
      {
        name: "idx_events_rejected_event_id",
        using: "BTREE",
        fields: [
          { name: "rejected_event_id" },
        ]
      },
      {
        name: "idx_events_observation_event_id",
        using: "BTREE",
        fields: [
          { name: "observation_event_id" },
        ]
      },
    ]
  });
};
