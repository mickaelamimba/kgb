<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210713213819 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE agents_specialties');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE agents_specialties (agents_id INT NOT NULL, specialties_id INT NOT NULL, INDEX IDX_40329B8B709770DC (agents_id), INDEX IDX_40329B8BE3AC3692 (specialties_id), PRIMARY KEY(agents_id, specialties_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE agents_specialties ADD CONSTRAINT FK_40329B8B709770DC FOREIGN KEY (agents_id) REFERENCES agents (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE agents_specialties ADD CONSTRAINT FK_40329B8BE3AC3692 FOREIGN KEY (specialties_id) REFERENCES specialties (id) ON UPDATE NO ACTION ON DELETE CASCADE');
    }
}
