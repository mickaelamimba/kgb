<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210714215719 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE missions DROP FOREIGN KEY FK_34F1D47E709770DC');
        $this->addSql('ALTER TABLE missions DROP FOREIGN KEY FK_34F1D47E7B1B5F17');
        $this->addSql('DROP INDEX IDX_34F1D47E709770DC ON missions');
        $this->addSql('DROP INDEX UNIQ_34F1D47E7B1B5F17 ON missions');
        $this->addSql('ALTER TABLE missions DROP specialtie_mission_id, DROP agents_id');
        $this->addSql('ALTER TABLE specialties DROP FOREIGN KEY FK_410754B0709770DC');
        $this->addSql('DROP INDEX IDX_410754B0709770DC ON specialties');
        $this->addSql('ALTER TABLE specialties DROP agents_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE missions ADD specialtie_mission_id INT NOT NULL, ADD agents_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE missions ADD CONSTRAINT FK_34F1D47E709770DC FOREIGN KEY (agents_id) REFERENCES agents (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE missions ADD CONSTRAINT FK_34F1D47E7B1B5F17 FOREIGN KEY (specialtie_mission_id) REFERENCES specialties (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_34F1D47E709770DC ON missions (agents_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_34F1D47E7B1B5F17 ON missions (specialtie_mission_id)');
        $this->addSql('ALTER TABLE specialties ADD agents_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE specialties ADD CONSTRAINT FK_410754B0709770DC FOREIGN KEY (agents_id) REFERENCES agents (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_410754B0709770DC ON specialties (agents_id)');
    }
}
